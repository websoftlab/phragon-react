import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageSquareDashedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageSquareDashedIcon = React.forwardRef<SVGSVGElement, TablerMessageSquareDashedIconProps>(
	function TablerMessageSquareDashedIcon(props, ref) {
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
				<path d="M3 6V5c0-1.1.9-2 2-2h2" />
				<path d="M11 3h3" />
				<path d="M18 3h1c1.1 0 2 .9 2 2" />
				<path d="M21 9v2" />
				<path d="M21 15c0 1.1-.9 2-2 2h-1" />
				<path d="M14 17h-3" />
				<path d="m7 17-4 4v-5" />
				<path d="M3 12v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageSquareDashedIcon.displayName = "TablerMessageSquareDashedIcon";
}
