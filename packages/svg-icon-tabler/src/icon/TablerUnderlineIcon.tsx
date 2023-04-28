import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUnderlineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUnderlineIcon = React.forwardRef<SVGSVGElement, TablerUnderlineIconProps>(
	function TablerUnderlineIcon(props, ref) {
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
				<path d="M7 5v5a5 5 0 0 0 10 0v-5" />
				<path d="M5 19h14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUnderlineIcon.displayName = "TablerUnderlineIcon";
}
