let removeEditLink = false;
let removeForumList = false;
let removeRecentNewsList = false;
let removeRecommendationsList = false;
let removeInterestStacksList = false;
let removeReviewsList = false;
let removeThemeSongList = false;
let removeVAList = false;
let removeStaffList = false;
let removeRelatedAnimeList = false;
let removeMALXJapan = false;
let removeBackgroundDetail = false;
let removeFeaturedArticlesList = false;
let removeEpisodeList = false;
let collapseSynopsisText = false;
let removeAlternativeTitlesList = false;
let removeInformationList = false;
let removeStatisticsList = false;
let removeAvailableAtList = false;
let removeResourcesList = false;
let removeStreamingPlatformsList = false;
let removePreviewVideo = false;
let removeMembersCountResult = false;
let autoCompleteOnRatingActivation = false;
let collapseBackgroundDetail = false;
let collapseEpisodeList = false;
let collapseRelatedAnimeList = false;
let collapseVAList = false;
let collapseStaffList = false;
let collapseThemeSongList = false;
let collapseReviewsList = false;
let collapseInterestStacksList = false;
let collapseRecommendationsList = false;
let collapseRecentNewsList = false;
let collapseForumList = false;
let collapseFeaturedArticlesList = false;
let collapseStreamingPlatformsList = false;
let collapseResourcesList = false;
let collapseAvailableAtList = false;
let collapseStatisticsList = false;
let collapseInformationList = false;
let collapseAlternativeTitlesList = false;
let removeBreadcrumbList = false;

//grab a node with a specified innerhtml and tag name
function grabNode(tagName, innerText){
    let nodeList = document.getElementsByTagName(tagName)

    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].innerText === innerText) {
            return nodeList[i];
        }
    }

    return;
}

//create collapsible
function createCollapsible(title, collapsibleId, nodeReferenceLocation){
    let collapsibleTitleNode = '<button type="button" class="collapsible" id="'+ collapsibleId + '"><i class="fa-solid fa-angle-down" style="margin-right: 5px;"></i>' + title + '</button>';

    //add before reference node
    nodeReferenceLocation.insertAdjacentHTML("beforebegin", collapsibleTitleNode)

    //add event listeners
    const collapsibleNode = document.getElementById(collapsibleId);

    collapsibleNode.addEventListener("click", function(){
        this.classList.toggle("active")
        if (nodeReferenceLocation.style.maxHeight) {
            nodeReferenceLocation.style.maxHeight = null;
        } else {
            nodeReferenceLocation.style.maxHeight = "1000px";
        }
    });

    //add style
    nodeReferenceLocation.classList.add("content");
}

//add styling to document
function addCSS(){
    let styles = `
    .collapsible {border-color: #bebebe; border-style: solid; border-width: 0 0 1px; color: #000; font-size: 14px; font-weight: 700; margin: 4px 0 5px; padding: 3px 0; width: 100%; background: none; text-align: left;}
    .dark-mode .collapsible {border-color: #414141; color: #e0e0e0;}
    .collapsible:hover {cursor: pointer; text-decoration: underline;}
    .content {max-height: 0; overflow: hidden; transition: max-height 0.2s ease;}
    .content .caption {display: inline-block; margin-left: 5px;}`;
    let styleSheet = document.createElement("style");

    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    //add fontawesome for icons
    const iconsStyles = document.createElement("link");
    iconsStyles.rel = "stylesheet";
    iconsStyles.type = "text/css";
    iconsStyles.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    document.head.appendChild(iconsStyles);
}

function removeEdit(){
    if (!removeEditLink) return;

    let nodeList = document.getElementsByTagName('a')
    let editText = "Edit"

    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].innerHTML === editText) {
            nodeList[i].remove()
        }
    }
}

function removeForum(){
    if (!removeForumList) return;

    let forumListNode = document.getElementsByClassName("page-forum")[0]
    if(!forumListNode) return;

    let forumHeader = forumListNode.previousElementSibling

    forumListNode.remove()
    forumHeader.remove()
}

function removeRecentNews(){
    if (!removeRecentNewsList) return;

    //grab header node
    let recentNewsNode = grabNode("h2", "Recent News");
    if(!recentNewsNode) return;

    let recentNewsHeaderNode = recentNewsNode.parentElement

    //remove
    for(let i = 0; i < 6; i++){
        recentNewsHeaderNode.nextElementSibling.remove();
    }
    recentNewsHeaderNode.remove();
}

function removeRecommendations(){
    if (!removeRecommendationsList) return;

    //grab header node
    let recommendationNode = grabNode("h2", "Recommendations")
    if(!recommendationNode) return;

    let recommendationHeaderNode = recommendationNode.parentElement

    //remove
    for(let i = 0; i < 2; i++){
        recommendationHeaderNode.nextElementSibling.remove();
    }
    recommendationHeaderNode.remove();
}

function removeInterestStacks(){
    if (!removeInterestStacksList) return;

    //grab header node
    let interestNode = grabNode("h2", "Interest Stacks")
    if(!interestNode) return;

    let interestHeaderNode = interestNode.parentElement

    //remove
    interestHeaderNode.nextElementSibling.remove();
    interestHeaderNode.remove();
}

function removeReviews(){
    if (!removeReviewsList) return;

    //remove
    let reviewNode = grabNode("h2", "Reviews")
    if(!reviewNode) return;

    reviewNode.remove()
    document.getElementsByClassName("anime-info-review__header")[0].remove();

    let userReviews = document.getElementsByClassName("review-element");
    for(let i = userReviews.length-1; i >= 0; i--){ //user reviews
        userReviews[i].remove();
    }
}

function removeThemeSongs(){
    if (!removeThemeSongList) return;

    //grab header node
    let themeSongNode = document.getElementsByClassName("theme-songs")[0]
    if(!themeSongNode) return;

    let themeSongSectionNode = themeSongNode.parentElement.parentElement

    //remove
    for(let i = 0; i < 2; i++){
        themeSongSectionNode.nextElementSibling.remove();
    }
    themeSongSectionNode.remove();
}

function removeStaff(){
    if (!removeStaffList) return;

    //grab header node
    let staffNode = grabNode("h2", "Staff")
    if(!staffNode) return;

    let staffHeaderNode = staffNode.parentElement

    //remove
    for(let i = 0; i < 3; i++){
        staffHeaderNode.nextElementSibling.remove();
    }
    staffHeaderNode.previousElementSibling.remove();
    staffHeaderNode.remove();
}

function removeVA(){
    if (!removeVAList) return;

    //grab header node
    let vaNode = grabNode("h2", "Characters & Voice Actors")
    if(!vaNode) return;

    let vaHeaderNode = vaNode.parentElement

    //remove
    for(let i = 0; i < 2; i++){
        vaHeaderNode.nextElementSibling.remove();
    }
    vaHeaderNode.remove();
}

function removeRelatedAnime(){
    if (!removeRelatedAnimeList) return;

    //grab header node
    let relatedAnimeNode = document.getElementsByClassName("anime_detail_related_anime")[0]
    if(!relatedAnimeNode) return;

    //remove
    for(let i = 0; i < 2; i++){
        relatedAnimeNode.previousElementSibling.remove();
    }
    relatedAnimeNode.nextElementSibling.remove();
    relatedAnimeNode.remove();
}

function removeMALXJapanSection(){
    if (!removeMALXJapan) return;

    //grab header node
    let MALXJAPANNode = grabNode("a", "Visit MALxJapan")
    if(!MALXJAPANNode) return;

    //remove
    MALXJAPANNode.parentElement.parentElement.parentElement.remove();
}

function removeBackground(){
    if (!removeBackgroundDetail) return;

    //grab header node
    let backgroundNode = grabNode("h2", "Background")
    if(!backgroundNode) return;

    //remove
    let backgroundHeaderNode = backgroundNode.parentElement;
    if(backgroundHeaderNode.nextElementSibling.tagName === "I"){ //if it has a background
        backgroundHeaderNode.nextElementSibling.nextSibling.remove();
        backgroundHeaderNode.nextElementSibling.remove(); 
    } 
    else{
        for (let i = 0; i < 3 ; i++){
            if(!backgroundHeaderNode.nextSibling) break;
            backgroundHeaderNode.nextSibling.remove();
        }
    }
    backgroundHeaderNode.remove();
}

function removeFeaturedArticle(){
    if (!removeFeaturedArticlesList) return;

    //grab feature articles
    let featureArticleNode = document.getElementsByClassName("detail-page-featured-article")[0];
    if (!featureArticleNode) return; 

    //remove
    featureArticleNode.previousElementSibling.remove();
    featureArticleNode.remove();
}

function removeEpisodes(){
    if (!removeEpisodeList) return;

    //grab episodes node
    let episodeNode = document.getElementById("episode_video");
    if(!episodeNode) return;

    //remove
    episodeNode.previousElementSibling.remove();
    episodeNode.nextElementSibling.remove();
    episodeNode.remove();
}

function collapseSynopsis(){
    if(!collapseSynopsisText) return;

    //grab original content
    let synopsisNode = document.querySelectorAll('[itemprop="description"]')[0];
    if(!synopsisNode) return;

    //remove previous header
    synopsisNode.previousElementSibling.remove();

    //add content
    createCollapsible("Synopsis", "synopsis", synopsisNode);
}

function removeAlternativeTitles(){
    if(!removeAlternativeTitlesList) return;

    //grab header node
    let alternativeTitleHeaderNode = grabNode("h2", "Alternative Titles");
    if(!alternativeTitleHeaderNode) return;

    //remove
    alternativeTitleHeaderNode.previousElementSibling.remove(); //br

    while(alternativeTitleHeaderNode.nextElementSibling.tagName !== "BR"){ //remove title list
        alternativeTitleHeaderNode.nextElementSibling.remove();
    }
    alternativeTitleHeaderNode.nextElementSibling.remove();//one more br
    alternativeTitleHeaderNode.remove();
}

function removeInformation(){
    if(!removeInformationList) return;

    //grab header node
    let informationTitleHeaderNode = grabNode("h2", "Information");
    if(!informationTitleHeaderNode) return;

    //remove
    while(informationTitleHeaderNode.nextElementSibling.tagName !== "BR"){ //remove title list
        informationTitleHeaderNode.nextElementSibling.remove();
    }
    informationTitleHeaderNode.nextElementSibling.remove(); //br
    informationTitleHeaderNode.remove();
}

function removeStatistics(){
    if(!removeStatisticsList) return;

    //grab header node
    let statisticsTitleHeaderNode = grabNode("h2", "Statistics");
    if(!statisticsTitleHeaderNode) return;

    //remove
    while(statisticsTitleHeaderNode.nextElementSibling.tagName !== "BR"){ //remove title list
        statisticsTitleHeaderNode.nextElementSibling.remove();
    }
    statisticsTitleHeaderNode.nextElementSibling.remove(); //br
    statisticsTitleHeaderNode.remove();
}

function removeExternalLinksSideTab(){
    let nodeList = [];

    //determine which ones to remove
    if(removeAvailableAtList){
        let availableAtheadernode = grabNode("h2", "Available At");
        if(availableAtheadernode) nodeList.push(availableAtheadernode);
    }
    if(removeResourcesList){
        let resourceheadernode = grabNode("h2", "Resources");
        if(resourceheadernode) nodeList.push(resourceheadernode);
    }
    if(removeStreamingPlatformsList){
        let streamingPlatformheadernode = grabNode("h2", "Streaming Platforms");
        if(streamingPlatformheadernode) nodeList.push(streamingPlatformheadernode);
    }
    
    //remove
    for(let i = 0; i < nodeList.length; i++){
        nodeList[i].nextElementSibling.remove();
        nodeList[i].nextElementSibling.remove();
        nodeList[i].remove();
    }
}

function removePreview(){
    if(!removePreviewVideo) return;

    let vidNode = document.getElementsByClassName("anime-detail-header-video")[0];
    if(!vidNode) return;
    vidNode.remove();
}

function removeMembersCount(){
    if(!removeMembersCountResult) return;

    let numNode = document.getElementsByClassName("numbers members")[0];
    if(!numNode) return;
    numNode.remove();
}

function autoCompleteOnRating(){
    if(!autoCompleteOnRatingActivation) return;

    //Add to list if haven't
    let addToListNode = document.getElementsByClassName("btn-user-status-add-list")[0];
    if(addToListNode){
        addToListNode.dispatchEvent(new Event('click'));;
    }
    
    //Add listener
    let ratingNode = document.getElementById("myinfo_score");
    const statusSelectorChange = () =>{
        let statusNode = document.getElementById("myinfo_status");
        statusNode.value = 2;
        statusNode.dispatchEvent(new Event('change'));
    }

    ratingNode.onchange = statusSelectorChange;
}

function collapseBackground(){
    if(!collapseBackgroundDetail) return;

    //grab h2
    let headerNode =  grabNode("h2", "Background");
    if(!headerNode) return;

    //create a div
    let backgroundDiv = document.createElement('div');
    headerNode.parentElement.insertAdjacentElement("afterend", backgroundDiv)

    //move content into div
    backgroundDiv.appendChild(backgroundDiv.nextSibling);
    while(backgroundDiv.nextSibling.tagName != 'DIV'){
        backgroundDiv.appendChild(backgroundDiv.nextSibling)
    }

    //remove previous header
    headerNode.parentElement.remove();

    //create content
    createCollapsible("Background", "background", backgroundDiv)
}

function collapseEpisode(){
    if(!collapseEpisodeList) return;

    //grab content
    let episodesNode = document.getElementById("episode_video");
    if(!episodesNode) return;

    //remove previous header
    episodesNode.previousElementSibling.remove();

    //add content
    createCollapsible("Episode Videos", "episodeVideos", episodesNode);
}

function collapseRelatedAnime(){
    if(!collapseRelatedAnimeList) return;

    //content
    let relatedAnimeNode = document.getElementsByClassName("anime_detail_related_anime")[0];
    if(!relatedAnimeNode) return;

    //remove previous header
    relatedAnimeNode.previousElementSibling.remove();

    //add content
    let contentDiv = document.createElement('div');
    relatedAnimeNode.insertAdjacentElement("beforebegin", contentDiv);
    contentDiv.appendChild(relatedAnimeNode);

    createCollapsible("Related Anime", "relatedAnime", contentDiv);
}

function collapseVA(){
    if(!collapseVAList) return;

    //content
    let VAHeader = grabNode("h2", "Characters & Voice Actors");
    if(!VAHeader) return;
    let VAContent = VAHeader.parentElement.nextElementSibling;

    //remove previous header
    VAHeader.parentElement.remove();

    //add content
    createCollapsible("Characters & Voice Actors", "charactersVoiceActors", VAContent);
}

function collapseStaff(){
    if(!collapseStaffList) return;

    //content
    let staffHeader = grabNode("h2", "Staff");
    if(!staffHeader) return;
    let staffContent = staffHeader.parentElement.nextElementSibling;

    //remove
    staffHeader.parentElement.remove(); //header
    staffContent.nextElementSibling.remove(); //br

    //add content
    createCollapsible("Staff", "staff", staffContent);
}

function collapseThemeSong(){
    if(!collapseThemeSongList) return;

    //grab header node
    let themeSongNode = document.getElementsByClassName("theme-songs")[0]
    if(!themeSongNode) return;

    //add content
    let themeSongSectionNode = themeSongNode.parentElement.parentElement
    let contentDiv = document.createElement('div');
    themeSongSectionNode.insertAdjacentElement("beforebegin", contentDiv);
    contentDiv.appendChild(themeSongSectionNode);

    createCollapsible("Theme Songs", "themeSong", contentDiv);
}

function collapseReviews(){
    if(!collapseReviewsList) return;

    //grab content
    let reviewInfoHeader = document.getElementsByClassName("anime-info-review__header")[0];
    if(!reviewInfoHeader) return;

    //remove
    reviewInfoHeader.previousElementSibling.remove();

    //add content
    let contentDiv = document.createElement('div');
    reviewInfoHeader.insertAdjacentElement("beforebegin", contentDiv);
    contentDiv.appendChild(reviewInfoHeader);
    for(let i = 0; i < 3; i++) contentDiv.appendChild(contentDiv.nextElementSibling);
    createCollapsible("Reviews", "reviews", contentDiv);
}

function collapseInterestStacks(){
    if(!collapseInterestStacksList) return;

    //grab content
    let interestStack = document.getElementsByClassName("detail-stack-block")[0];
    if(!interestStack) return;

    //remove
    interestStack.previousElementSibling.remove();
    //add content
    createCollapsible("Interest Stacks", "interestStacks", interestStack);
}

function collapseRecommendations(){
    if(!collapseRecommendationsList) return;

    //grab content
    let recommendationHeader = grabNode("h2", "Recommendations");
    if(!recommendationHeader) return;
    let recommendationContent = recommendationHeader.parentElement.nextElementSibling;

    //remove
    recommendationHeader.parentElement.remove();

    //add content
    createCollapsible("Recommendations", "recommendations", recommendationContent);
}

function collapseRecentNews(){
    if(!collapseRecentNewsList) return;

    //grab content
    let recentNewsHeader = grabNode("h2", "Recent News");
    if(!recentNewsHeader) return;

    //create div
    let contentDiv = document.createElement('div');
    recentNewsHeader.parentElement.insertAdjacentElement("afterend", contentDiv);

    //remove
    recentNewsHeader.parentElement.remove();

    //add content
    for(let i = 0; i < 4; i++) contentDiv.appendChild(contentDiv.nextElementSibling);
    createCollapsible("Recent News", "recentNews", contentDiv);
}

function collapseForum(){
    if(!collapseForumList) return;

    //grab content
    let forumContent = document.getElementsByClassName('page-forum')[0];
    if(!forumContent) return;

    //remove
    forumContent.previousElementSibling.remove();

    //create content
    createCollapsible("Recent Forum Discussion", "recentForum", forumContent)
}

function collapseFeaturedArticles(){
    if(!collapseFeaturedArticlesList) return;

    //grab content
    let articleContent = document.getElementsByClassName("detail-page-featured-article")[0];
    if(!articleContent) return;

    //remove
    articleContent.previousElementSibling.remove();

    //create content
    createCollapsible("Recent Featured Articles", "recentFeaturedArticles", articleContent);
}

function collapseStreamingPlatforms(){
    if(!collapseStreamingPlatformsList) return;

    //grab content
    let headerNode = grabNode("h2", "Streaming Platforms");
    if(!headerNode) return;

    //create content
    let contentDiv = document.createElement('div');
    contentDiv.appendChild(headerNode.nextElementSibling)
    headerNode.insertAdjacentElement("afterend", contentDiv);
    createCollapsible("Streaming Platforms", "streamingPlatforms", contentDiv);

    //remove
    headerNode.remove();
}

function collapseResources(){
    if(!collapseResourcesList) return;

    //grab content
    let headerNode = grabNode("h2", "Resources");
    if(!headerNode) return;

    //create content
    let contentDiv = document.createElement('div');
    contentDiv.appendChild(headerNode.nextElementSibling)
    headerNode.insertAdjacentElement("afterend", contentDiv);
    createCollapsible("Resources", "resources", contentDiv);

    //remove
    headerNode.remove();
}

function collapseAvailableAt(){
    if(!collapseAvailableAtList) return;

    //grab content
    let headerNode = grabNode("h2", "Available At");
    if(!headerNode) return;

    //create content
    let contentDiv = document.createElement('div');
    contentDiv.appendChild(headerNode.nextElementSibling)
    headerNode.insertAdjacentElement("afterend", contentDiv);
    createCollapsible("Available At", "availableAt", contentDiv);

    //remove
    headerNode.remove();
}

function collapseStatistics(){
    if(!collapseStatisticsList) return;

    //grab content
    let headerNode = grabNode("h2", "Statistics");
    if(!headerNode) return;

    //create content
    let contentDiv = document.createElement('div');
    while(headerNode.nextElementSibling.tagName != ("BR")) contentDiv.appendChild(headerNode.nextElementSibling);
    headerNode.insertAdjacentElement("afterend", contentDiv);
    createCollapsible("Statistics", "statistics", contentDiv);

    //remove
    headerNode.remove();
}

function collapseInformation(){
    if(!collapseInformationList) return;

    //grab content
    let headerNode = grabNode("h2", "Information");
    if(!headerNode) return;

    //create content
    let contentDiv = document.createElement('div');
    while(headerNode.nextElementSibling.tagName != ("BR")) contentDiv.appendChild(headerNode.nextElementSibling);
    headerNode.insertAdjacentElement("afterend", contentDiv);
    createCollapsible("Information", "information", contentDiv);

    //remove
    headerNode.remove();
}

function collapseAlternativeTitles(){
    if(!collapseAlternativeTitlesList) return;

    //grab content
    let headerNode = grabNode("h2", "Alternative Titles");
    if(!headerNode) return;

    //create content
    let contentDiv = document.createElement('div');
    while(headerNode.nextElementSibling.tagName != ("BR")) contentDiv.appendChild(headerNode.nextElementSibling);
    headerNode.nextElementSibling.remove(); //remove an extra br
    headerNode.insertAdjacentElement("afterend", contentDiv);
    createCollapsible("Alternative Titles", "alternativeTitles", contentDiv);

    //remove
    headerNode.remove();
}

function removeBreadcrumb(){
    if(!removeBreadcrumbList) return;

    //grab breadcrumb
    let breadcrumbNode = document.getElementsByClassName("breadcrumb")[0];
    if(!breadcrumbNode) return;

    //remove
    breadcrumbNode.remove();
}

//get data
chrome.runtime.sendMessage({ s: "content" }, (response) => {
    removeEditLink = response.removeEditLink;
    removeForumList = response.removeForumList;
    removeRecentNewsList = response.removeRecentNewsList;
    removeRecommendationsList = response.removeRecommendationsList;
    removeInterestStacksList = response.removeInterestStacksList;
    removeReviewsList = response.removeReviewsList;
    removeThemeSongList = response.removeThemeSongList;
    removeVAList = response.removeVAList;
    removeStaffList = response.removeStaffList;
    removeRelatedAnimeList = response.removeRelatedAnimeList;
    removeMALXJapan = response.removeMALXJapan;
    removeBackgroundDetail = response.removeBackgroundDetail;
    removeFeaturedArticlesList = response.removeFeaturedArticlesList;
    removeEpisodeList = response.removeEpisodeList;
    collapseSynopsisText = response.collapseSynopsisText;
    removeAlternativeTitlesList = response.removeAlternativeTitlesList;
    removeInformationList = response.removeInformationList;
    removeStatisticsList = response.removeStatisticsList;
    removeAvailableAtList = response.removeAvailableAtList;
    removeResourcesList = response.removeResourcesList;
    removeStreamingPlatformsList = response.removeStreamingPlatformsList;
    removePreviewVideo = response.removePreviewVideo;
    removeMembersCountResult = response.removeMembersCountResult;
    autoCompleteOnRatingActivation = response.autoCompleteOnRatingActivation;
    collapseBackgroundDetail = response.collapseBackgroundDetail;
    collapseEpisodeList = response.collapseEpisodeList;
    collapseRelatedAnimeList = response.collapseRelatedAnimeList;
    collapseVAList = response.collapseVAList;
    collapseStaffList = response.collapseStaffList;
    collapseThemeSongList = response.collapseThemeSongList;
    collapseReviewsList = response.collapseReviewsList;
    collapseInterestStacksList = response.collapseInterestStacksList;
    collapseRecommendationsList = response.collapseRecommendationsList;
    collapseRecentNewsList = response.collapseRecentNewsList;
    collapseForumList = response.collapseForumList;
    collapseFeaturedArticlesList = response.collapseFeaturedArticlesList;
    collapseStreamingPlatformsList = response.collapseStreamingPlatformsList;
    collapseResourcesList = response.collapseResourcesList;
    collapseAvailableAtList = response.collapseAvailableAtList;
    collapseStatisticsList = response.collapseStatisticsList;
    collapseInformationList = response.collapseInformationList;
    collapseAlternativeTitlesList = response.collapseAlternativeTitlesList;
    removeBreadcrumbList = response.removeBreadcrumbList;
});

document.addEventListener('DOMContentLoaded', () => {
    //additional functions
    addCSS();

    //collapse
    collapseSynopsis();
    collapseBackground();
    collapseEpisode();
    collapseRelatedAnime();
    collapseVA();
    collapseStaff();
    collapseThemeSong();
    collapseReviews();
    collapseInterestStacks();
    collapseRecommendations();
    collapseRecentNews();
    collapseForum();
    collapseFeaturedArticles();
    collapseStreamingPlatforms();
    collapseResources();
    collapseAvailableAt();
    collapseStatistics();
    collapseInformation();
    collapseAlternativeTitles();

    //remove
    removeEdit();
    removeForum();
    removeRecentNews();
    removeRecommendations();
    removeInterestStacks();
    removeReviews();
    removeThemeSongs();
    removeStaff();
    removeVA();
    removeRelatedAnime();
    removeMALXJapanSection();
    removeBackground();
    removeFeaturedArticle();
    removeEpisodes();
    removeAlternativeTitles();
    removeInformation();
    removeStatistics();
    removeExternalLinksSideTab();
    removePreview();
    removeMembersCount();
    removeBreadcrumb();

    //remove blank rows except for the padding ones
    let tdList = document.getElementsByTagName("td")
    for(let i = 0; i < tdList.length; i++){
        if(tdList[i].childElementCount == 0){
            if(tdList[i].parentElement){
                tdList[i].parentElement.remove();
            }
            else{
                tdList[i].remove();
            }
        }
    }
});

window.addEventListener('load', () => {
    autoCompleteOnRating();
});