import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGitlabIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGitlabIcon = React.forwardRef<SVGSVGElement, TablerBrandGitlabIconProps>(
	function TablerBrandGitlabIcon(props, ref) {
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
				<path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGitlabIcon.displayName = "TablerBrandGitlabIcon";
}
