import React, { useState } from "react"; 

export const Comics = (props) => {
    const { comic, updateComic } = props;
    const [issueText, setIssueText] = useState('');

    const deleteIssue = (id) => {
        const updatedComic = {
            ...comic,
            issues: comic.issues.filter((x) =>x._id !== id)
        };
        updateComic(updatedComic);
    }

    const onSubmitIssue = (issue) => {
        comic.issues.push({ story: issue, _id: comic._id });
        updateComic(comic);
    }
    console.log('issues', comic.issues);
// TODO: figure out why comic.issues is an empty array 
    return <div>
        { comic.title }
        <p>Issues:</p>
        { comic.issues && comic.issues.map((issue, i) => (
            <li key={i}>
                <p>Issue #{i}: { issue.story }</p>
            </li>
        ))}
        <form>
            <input
             type='text'
             placeholder='enter text of issue'
             onChange={(e) => setIssueText(e.target.value)}
             value={issueText}></input>
             <button type='submit' onClick={() => onSubmitIssue(issueText)}>
                 Create Issue
             </button>
        </form>
    </div>

};