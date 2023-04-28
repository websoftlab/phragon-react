import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandRedditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandRedditIcon = React.forwardRef<SVGSVGElement, TablerBrandRedditIconProps>(
	function TablerBrandRedditIcon(props, ref) {
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
				<path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
				<path d="M12 8l1 -5l6 1" />
				<path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M8.5,13a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				<path d="M14.5,13a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				<path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandRedditIcon.displayName = "TablerBrandRedditIcon";
}
