import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAlipayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAlipayIcon = React.forwardRef<SVGSVGElement, TablerBrandAlipayIconProps>(
	function TablerBrandAlipayIcon(props, ref) {
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
				<path d="M19 3h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
				<path d="M7 7h10" />
				<path d="M12 3v7" />
				<path d="M21 17.314c-2.971 -1.923 -15 -8.779 -15 -1.864c0 1.716 1.52 2.55 2.985 2.55c3.512 0 6.814 -5.425 6.814 -8h-6.604" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAlipayIcon.displayName = "TablerBrandAlipayIcon";
}
