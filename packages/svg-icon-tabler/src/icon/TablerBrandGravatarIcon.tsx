import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGravatarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGravatarIcon = React.forwardRef<SVGSVGElement, TablerBrandGravatarIconProps>(
	function TablerBrandGravatarIcon(props, ref) {
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
				<path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGravatarIcon.displayName = "TablerBrandGravatarIcon";
}
