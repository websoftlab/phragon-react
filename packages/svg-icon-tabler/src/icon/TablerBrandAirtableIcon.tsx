import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAirtableIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAirtableIcon = React.forwardRef<SVGSVGElement, TablerBrandAirtableIconProps>(
	function TablerBrandAirtableIcon(props, ref) {
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
				<path d="M3 10v8l7 -3v-2.6z" />
				<path d="M3 6l9 3l9 -3l-9 -3z" />
				<path d="M14 12.3v8.7l7 -3v-8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAirtableIcon.displayName = "TablerBrandAirtableIcon";
}
