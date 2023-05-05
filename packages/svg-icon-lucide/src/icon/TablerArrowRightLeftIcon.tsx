import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRightLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRightLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowRightLeftIconProps>(
	function TablerArrowRightLeftIcon(props, ref) {
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
				<path d="m16 3 4 4-4 4" />
				<path d="M20 7H4" />
				<path d="m8 21-4-4 4-4" />
				<path d="M4 17h16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRightLeftIcon.displayName = "TablerArrowRightLeftIcon";
}
