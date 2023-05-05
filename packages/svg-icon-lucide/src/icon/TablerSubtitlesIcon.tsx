import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSubtitlesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSubtitlesIcon = React.forwardRef<SVGSVGElement, TablerSubtitlesIconProps>(
	function TablerSubtitlesIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M7 13h4" />
				<path d="M15 13h2" />
				<path d="M7 9h2" />
				<path d="M13 9h4" />
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSubtitlesIcon.displayName = "TablerSubtitlesIcon";
}
