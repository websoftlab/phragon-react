import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletShareIcon = React.forwardRef<SVGSVGElement, TablerDropletShareIconProps>(
	function TablerDropletShareIcon(props, ref) {
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
				<path d="M18.884 13.025a6.591 6.591 0 0 0 -.82 -2.148l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.125 7.125 0 0 0 4.498 1.58" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletShareIcon.displayName = "TablerDropletShareIcon";
}
