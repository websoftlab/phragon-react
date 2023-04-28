import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandValorantIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandValorantIcon = React.forwardRef<SVGSVGElement, TablerBrandValorantIconProps>(
	function TablerBrandValorantIcon(props, ref) {
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
				<path d="M14.5 14h4.5l2 -2v-6z" />
				<path d="M9 19h5l-11 -13v6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandValorantIcon.displayName = "TablerBrandValorantIcon";
}
