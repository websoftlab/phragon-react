import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsShuffle2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsShuffle2Icon = React.forwardRef<SVGSVGElement, TablerArrowsShuffle2IconProps>(
	function TablerArrowsShuffle2Icon(props, ref) {
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
				<path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsShuffle2Icon.displayName = "TablerArrowsShuffle2Icon";
}
