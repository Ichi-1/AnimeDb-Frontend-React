import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IoClose, IoSearch } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from "hooks/useDebounce";
import { AnimeScreen } from "components/Anime/SearchBarItem";
import AnimeSerivce from "api/AnimeService";


const SearchBarContainer = styled(motion.div)`
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 3.8em;
    width:34em;
    background-color: #fff;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 21px;
    color: #12112e;
    font-weight: 500;
    border-radius: 6px;
    background-color: transparent;

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 0;
        }
    }

    &::placeholder {
        color: #bebebe;
        transition: all 250ms ease-in-out;
    }
`;

const SearchIcon = styled.span`
    color: #bebebe;
    font-size: 27px;
    margin-right: 10px;
    margin-top: -5px;
    margin-left: 6px;
    vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
    margin-right: 25px;
    color: #bebebe;
    font-size: 23px;
    vertical-align: middle;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: #dfdfdf;
    }
`;

const LineSeperator = styled.span`
    display: flex;
    min-width: 100%;
    min-height: 1.5px;
    margin-top: 1.5px;
    background-color: #d8d8d878;
`;

const SearchContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    overflow-x: hidden;
    box-sizing: border-box;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WarningMessage = styled.span`
    color: #a1a1a1;
    font-size: 14px;
    display: flex;
    align-self: center;
    justify-self: center;
`;

const containerVariants = {
    expanded: {
        height: "30em",
    },
    collapsed: {
        height: "3.8em",
    },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };


export const SearchBar = (props) => {
    // Input animamation hooks
    const [isExpanded, setExpanded] = useState(false);
    const [parentRef, isClickedOutside] = useClickOutside();
    const inputRef = useRef();
    // Searching hooks
    const [query, setQuery] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [queryResult, setQueryResult] = useState([]);
    const [noQueryResult, setNoQueryResult] = useState(false);
    const isEmpty = !query || queryResult.length === 0;

    const changeHandler = (e) => {
        e.preventDefault();
        if (e.target.value.trim() === "") setNoQueryResult(false);
        setQuery(e.target.value);
    };

    const expandContainer = () => {
        setExpanded(true);
    };

    const collapseContainer = () => {
        setExpanded(false);
        setQuery("");
        setLoading(false);
        setNoQueryResult(false);
        setQueryResult([]);
        if (inputRef.current) inputRef.current.value = "";
    };

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);


    const searchContent = async () => {
        if (!query || query.trim() === "") return;
        setLoading(true);
        setNoQueryResult(false);

        const response = await AnimeSerivce.fetchSearch(query)
        const searchResult = response.data.result

        if (!response || searchResult.length === 0) {
            console.log(response.status)
            setNoQueryResult(true);
        }

        setQueryResult(searchResult);
        setLoading(false);
    };

    useDebounce(query, 500, searchContent);

    return (
        <SearchBarContainer
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariants}
            transition={containerTransition}
            ref={parentRef}
        >
            <SearchInputContainer>
                <SearchIcon>
                    <IoSearch />
                </SearchIcon>
                <SearchInput
                    placeholder="Search for Anime series ... "
                    onFocus={expandContainer}
                    ref={inputRef}
                    value={query}
                    onChange={changeHandler}

                />
                <AnimatePresence>
                    {isExpanded && (
                        <CloseIcon
                            key="close-icon"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={collapseContainer}
                            transition={{ duration: 0.2 }}
                        >
                            <IoClose />
                        </CloseIcon>
                    )}
                </AnimatePresence>
            </SearchInputContainer>
            {isExpanded && <LineSeperator />}
            {isExpanded && (
                <SearchContent>
                    {isLoading && (
                        <LoadingWrapper>
                            <MoonLoader loading color="#000" size={20} />
                        </LoadingWrapper>
                    )}
                    {!isLoading && isEmpty && !noQueryResult && (
                        <LoadingWrapper>
                            <WarningMessage>Start typing to Search</WarningMessage>
                        </LoadingWrapper>
                    )}
                    {!isLoading && noQueryResult && (
                        <LoadingWrapper>
                            <WarningMessage>No Anime Shows was found!</WarningMessage>
                        </LoadingWrapper>
                    )}
                    {!isLoading && !isEmpty && (
                        <>
                            {queryResult.map((show, index) => {
                                return <AnimeScreen
                                    key={show.id}
                                    imageSrc={show.poster_image}
                                    title={show.title}
                                    rating={show.average_rating}

                                />
                            })}
                        </>
                    )}
                </SearchContent>
            )}
        </SearchBarContainer>
    );
}