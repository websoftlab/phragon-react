import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAzureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAzureIcon = React.forwardRef<SVGSVGElement, TablerBrandAzureIconProps>(
	function TablerBrandAzureIcon(props, ref) {
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
				<path d="M6 7.5l-4 9.5h4l6 -15z" />
				<path d="M22 20l-7 -15l-3 7l4 5l-8 3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAzureIcon.displayName = "TablerBrandAzureIcon";
}
