import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrencyTugrikIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrencyTugrikIcon = React.forwardRef<SVGSVGElement, TablerCurrencyTugrikIconProps>(
	function TablerCurrencyTugrikIcon(props, ref) {
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
				<path d="M7 6h10" />
				<path d="M12 6v13" />
				<path d="M8 17l8 -3" />
				<path d="M16 10l-8 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrencyTugrikIcon.displayName = "TablerCurrencyTugrikIcon";
}
