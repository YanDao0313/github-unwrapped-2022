import React from 'react';
import {AbsoluteFill, Audio, Series} from 'remotion';
import {BG_2022} from '../src/palette';
import {AvgCommits} from './AvgCommits';
import {EndCard} from './EndCard';
import {EndCard2} from './EndCard2';
import {IssuesOpened2022} from './IssuesOpened';
import {CompactStats} from './map-response-to-stats';
import {Snow} from './Snow';
import {Socks} from './Socks';
import {Title} from './Title2022';
import {TopLang} from './TopLang';
import {Transition} from './Transition';
import {TopWeekdays2022} from './Weekday2022';

export const Main: React.FC<{
	stats: CompactStats;
	enableDecoration: boolean;
}> = ({stats, enableDecoration}) => {
	if (!stats) {
		return null;
	}

	return (
		<AbsoluteFill
			style={{
				background: BG_2022,
			}}
		>
			<Audio src="https://jonnyburger.s3.eu-central-1.amazonaws.com/the-librarian.mp3"></Audio>
			<Snow></Snow>
			<Series>
				<Series.Sequence durationInFrames={130}>
					<Title noBackground avatar={stats.avatar}></Title>
				</Series.Sequence>
				<Series.Sequence durationInFrames={150} offset={-25}>
					<Transition>
						<Socks noBackground></Socks>
					</Transition>
				</Series.Sequence>

				<Series.Sequence durationInFrames={150} offset={-25}>
					<Transition>
						<AvgCommits noBackground></AvgCommits>
					</Transition>
				</Series.Sequence>

				<Series.Sequence durationInFrames={220} offset={-25}>
					<Transition>
						<IssuesOpened2022 noBackground></IssuesOpened2022>
					</Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={150} offset={-25}>
					<Transition>
						<TopWeekdays2022 noBackground stats={stats}></TopWeekdays2022>
					</Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={85} offset={-25}>
					<Transition>
						<EndCard noBackground stats={stats}></EndCard>
					</Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={150} offset={-25}>
					<Transition>
						<EndCard2 noBackground />
					</Transition>
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};
