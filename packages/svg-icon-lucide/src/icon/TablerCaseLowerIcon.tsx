import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaseLowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaseLowerIcon = React.forwardRef<SVGSVGElement, TablerCaseLowerIconProps>(
	function TablerCaseLowerIcon(props, ref) {
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
				<path d="M20 12 A3 3 0 0 1 17 15 A3 3 0 0 1 14 12 A3 3 0 0 1 20 12" />
				<path d="M14 7 L14 15" />
				<path d="M10 12 A3 3 0 0 1 7 15 A3 3 0 0 1 4 12 A3 3 0 0 1 10 12" />
				<path d="M10 9 L10 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaseLowerIcon.displayName = "TablerCaseLowerIcon";
}
