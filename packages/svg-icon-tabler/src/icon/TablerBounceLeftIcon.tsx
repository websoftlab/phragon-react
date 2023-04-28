import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBounceLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBounceLeftIcon = React.forwardRef<SVGSVGElement, TablerBounceLeftIconProps>(
	function TablerBounceLeftIcon(props, ref) {
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
				<path d="M20 15.5c-3 -1 -5.5 -.5 -8 4.5c-.5 -3 -1.5 -5.5 -3 -8" />
				<path d="M6 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBounceLeftIcon.displayName = "TablerBounceLeftIcon";
}
