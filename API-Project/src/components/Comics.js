import React from "react"; 

export const Comics = (props) => {
    const { comic, updateComic } = props;

    const deleteIssue = (id) => {
        const updatedComic = {
            ...comic,
            issues: comic.issues.filter((x) =>x._id !== id)
        };
        updateComic(updatedComic);
    }

    const onSubmitIssue = (issue) => {
        const updatedComic = {
            ...comic,
            issues: comic.issues.push({ story: issue, _id: comic._id })
        }
        updateComic(updatedComic);
    }

    return <div>
        { comic.title }
        <p>Issues:</p>
        { comic.issues && comic.issues.map((issue, i) => (
            <li key={i}>
                <p>Issue #{i}: { issue.story }</p>
            </li>
        ))}
        { /* TODO: form for adding new issue where onSubmit is this.onSubmitIssue */ }
    </div>

};