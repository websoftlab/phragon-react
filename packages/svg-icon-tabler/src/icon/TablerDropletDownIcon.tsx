import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletDownIcon = React.forwardRef<SVGSVGElement, TablerDropletDownIconProps>(
	function TablerDropletDownIcon(props, ref) {
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
				<path d="M18.602 12.003a6.66 6.66 0 0 0 -.538 -1.126l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.159 7.159 0 0 0 4.972 1.564" />
				<path d="M19 16v6" />
				<path d="M22 19l-3 3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletDownIcon.displayName = "TablerDropletDownIcon";
}
