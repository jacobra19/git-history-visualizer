import React, { useEffect, useState } from 'react';
import { Timeline, StyledOcticon, Link } from '@primer/components';
import { CommitIcon } from '@primer/octicons-react';

import rawCommits from '../../../../mocks/lectureVoter.json';
import { Files } from '@components';
const commits = rawCommits.reverse();

const TimelineItem = ({
    commit,
    isCurrent,
}: {
    commit: Commit;
    isCurrent: boolean;
}) => {
    // console.log('commit :>> ', commit);
    return (
        <Timeline.Item>
            <Timeline.Badge
                style={isCurrent ? { background: 'green', color: 'white' } : {}}
            >
                <StyledOcticon icon={CommitIcon} />
            </Timeline.Badge>
            <Timeline.Body>
                <Link
                    href="#"
                    sx={{
                        fontWeight: 'bold',
                        color: 'fg.default',
                        mr: 1,
                    }}
                    muted
                >
                    {commit.authorName}
                </Link>
                created one ({commit.abbrevHash})
                <Link
                    href="#"
                    sx={{
                        fontWeight: 'bold',
                        color: 'fg.default',
                        mr: 1,
                    }}
                    muted
                >
                    hot potato
                </Link>
                <Link href="#" color="fg.muted" muted>
                    {commit.committerDateRel}
                </Link>
            </Timeline.Body>
        </Timeline.Item>
    );
};

const Home = () => {
    const [currentCommit, setCurrentCommit] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentCommit(current=>current+1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [currentCommit]);

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flex:1,
            }}
        >
            <Files/>
            <Timeline>
                {commits.map((commit,idx) => (
                    <TimelineItem key={commit.hash} commit={commit} isCurrent={idx===currentCommit}/>
                ))}
            </Timeline>
        </div>
    );
};

export default Home;
