import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsShuffleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsShuffleIcon = React.forwardRef<SVGSVGElement, TablerArrowsShuffleIconProps>(
	function TablerArrowsShuffleIcon(props, ref) {
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
				<path d="M18 4l3 3l-3 3" />
				<path d="M18 20l3 -3l-3 -3" />
				<path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
				<path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsShuffleIcon.displayName = "TablerArrowsShuffleIcon";
}
