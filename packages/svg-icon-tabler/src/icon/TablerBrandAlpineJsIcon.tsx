import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAlpineJsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAlpineJsIcon = React.forwardRef<SVGSVGElement, TablerBrandAlpineJsIconProps>(
	function TablerBrandAlpineJsIcon(props, ref) {
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
				<path d="M3 11.5l4.5 4.5h9l-9 -9z" />
				<path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAlpineJsIcon.displayName = "TablerBrandAlpineJsIcon";
}
