import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEggCrackedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEggCrackedIcon = React.forwardRef<SVGSVGElement, TablerEggCrackedIconProps>(
	function TablerEggCrackedIcon(props, ref) {
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
				<path d="M19 14.083c0 4.154 -2.966 6.74 -7 6.917c-4.2 0 -7 -2.763 -7 -6.917c0 -5.538 3.5 -11.09 7 -11.083c3.5 .007 7 5.545 7 11.083z" />
				<path d="M12 3l-1.5 5l3.5 2.5l-2 3.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEggCrackedIcon.displayName = "TablerEggCrackedIcon";
}
