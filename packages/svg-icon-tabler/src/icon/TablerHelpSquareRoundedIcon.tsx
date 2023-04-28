import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHelpSquareRoundedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHelpSquareRoundedIcon = React.forwardRef<SVGSVGElement, TablerHelpSquareRoundedIconProps>(
	function TablerHelpSquareRoundedIcon(props, ref) {
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
				<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
				<path d="M12 16v.01" />
				<path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHelpSquareRoundedIcon.displayName = "TablerHelpSquareRoundedIcon";
}
