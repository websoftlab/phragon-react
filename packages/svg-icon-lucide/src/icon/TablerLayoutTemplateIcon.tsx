import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayoutTemplateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayoutTemplateIcon = React.forwardRef<SVGSVGElement, TablerLayoutTemplateIconProps>(
	function TablerLayoutTemplateIcon(props, ref) {
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
				<path d="M21 3H3v7h18V3z" />
				<path d="M21 14h-5v7h5v-7z" />
				<path d="M12 14H3v7h9v-7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayoutTemplateIcon.displayName = "TablerLayoutTemplateIcon";
}
