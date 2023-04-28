import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandJuejinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandJuejinIcon = React.forwardRef<SVGSVGElement, TablerBrandJuejinIconProps>(
	function TablerBrandJuejinIcon(props, ref) {
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
				<path d="M2 12l10 7.422l10 -7.422" />
				<path d="M7 9l5 4l5 -4" />
				<path d="M11 6l1 .8l1 -.8l-1 -.8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandJuejinIcon.displayName = "TablerBrandJuejinIcon";
}
