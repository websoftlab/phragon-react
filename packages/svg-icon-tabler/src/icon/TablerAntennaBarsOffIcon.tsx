import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAntennaBarsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAntennaBarsOffIcon = React.forwardRef<SVGSVGElement, TablerAntennaBarsOffIconProps>(
	function TablerAntennaBarsOffIcon(props, ref) {
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
				<path d="M6 18v-3" />
				<path d="M10 18v-6" />
				<path d="M14 18v-4" />
				<path d="M14 10v-1" />
				<path d="M18 14v-8" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAntennaBarsOffIcon.displayName = "TablerAntennaBarsOffIcon";
}
