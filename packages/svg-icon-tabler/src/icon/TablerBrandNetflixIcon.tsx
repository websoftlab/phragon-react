import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNetflixIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNetflixIcon = React.forwardRef<SVGSVGElement, TablerBrandNetflixIconProps>(
	function TablerBrandNetflixIcon(props, ref) {
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
				<path d="M9 3l10 18h-4l-10 -18z" />
				<path d="M5 3v18h4v-10.5" />
				<path d="M19 21v-18h-4v10.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandNetflixIcon.displayName = "TablerBrandNetflixIcon";
}
