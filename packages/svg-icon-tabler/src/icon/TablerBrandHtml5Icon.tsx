import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandHtml5IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandHtml5Icon = React.forwardRef<SVGSVGElement, TablerBrandHtml5IconProps>(
	function TablerBrandHtml5Icon(props, ref) {
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
				<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
				<path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandHtml5Icon.displayName = "TablerBrandHtml5Icon";
}
