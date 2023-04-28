import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListNumbersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListNumbersIcon = React.forwardRef<SVGSVGElement, TablerListNumbersIconProps>(
	function TablerListNumbersIcon(props, ref) {
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
				<path d="M11 6h9" />
				<path d="M11 12h9" />
				<path d="M12 18h8" />
				<path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
				<path d="M6 10v-6l-2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListNumbersIcon.displayName = "TablerListNumbersIcon";
}
