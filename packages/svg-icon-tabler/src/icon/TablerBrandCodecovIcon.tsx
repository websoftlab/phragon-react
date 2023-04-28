import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCodecovIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCodecovIcon = React.forwardRef<SVGSVGElement, TablerBrandCodecovIconProps>(
	function TablerBrandCodecovIcon(props, ref) {
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
				<path d="M9.695 12.985a5.972 5.972 0 0 0 -3.295 -.985c-1.257 0 -2.436 .339 -3.4 1a9 9 0 1 1 18 0c-.966 -.664 -2.14 -1 -3.4 -1a6 6 0 0 0 -5.605 8.144" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCodecovIcon.displayName = "TablerBrandCodecovIcon";
}
