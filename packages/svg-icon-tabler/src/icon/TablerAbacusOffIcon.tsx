import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAbacusOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAbacusOffIcon = React.forwardRef<SVGSVGElement, TablerAbacusOffIconProps>(
	function TablerAbacusOffIcon(props, ref) {
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
				<path d="M5 5v16" />
				<path d="M19 21v-2m0 -4v-12" />
				<path d="M5 7h2m4 0h8" />
				<path d="M5 15h10" />
				<path d="M8 13v4" />
				<path d="M11 13v4" />
				<path d="M16 16v1" />
				<path d="M14 5v4" />
				<path d="M11 5v2" />
				<path d="M8 8v1" />
				<path d="M3 21h18" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAbacusOffIcon.displayName = "TablerAbacusOffIcon";
}
