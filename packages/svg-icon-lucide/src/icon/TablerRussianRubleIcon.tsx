import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRussianRubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRussianRubleIcon = React.forwardRef<SVGSVGElement, TablerRussianRubleIconProps>(
	function TablerRussianRubleIcon(props, ref) {
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
				<path d="M14 11c5.333 0 5.333-8 0-8" />
				<path d="M6 11h8" />
				<path d="M6 15h8" />
				<path d="M9 21V3" />
				<path d="M9 3h5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRussianRubleIcon.displayName = "TablerRussianRubleIcon";
}
