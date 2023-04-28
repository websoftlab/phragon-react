import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandTwilioIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandTwilioIcon = React.forwardRef<SVGSVGElement, TablerBrandTwilioIconProps>(
	function TablerBrandTwilioIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M9 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M15 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M9 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandTwilioIcon.displayName = "TablerBrandTwilioIcon";
}
