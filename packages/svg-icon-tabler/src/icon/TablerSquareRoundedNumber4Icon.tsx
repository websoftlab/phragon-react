import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareRoundedNumber4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareRoundedNumber4Icon = React.forwardRef<SVGSVGElement, TablerSquareRoundedNumber4IconProps>(
	function TablerSquareRoundedNumber4Icon(props, ref) {
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
				<path d="M10 8v3a1 1 0 0 0 1 1h3" />
				<path d="M14 8v8" />
				<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareRoundedNumber4Icon.displayName = "TablerSquareRoundedNumber4Icon";
}
