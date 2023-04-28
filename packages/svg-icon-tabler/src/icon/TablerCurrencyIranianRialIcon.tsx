import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyIranianRialIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyIranianRialIcon = React.forwardRef<SVGSVGElement, TablerCurrencyIranianRialIconProps>(
	function TablerCurrencyIranianRialIcon(props, ref) {
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
				<path d="M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1" />
				<path d="M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1" />
				<path d="M21 14v1.096a5 5 0 0 1 -3.787 4.85l-.213 .054" />
				<path d="M11 18h.01" />
				<path d="M14 18h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyIranianRialIcon.displayName = "TablerCurrencyIranianRialIcon";
}
