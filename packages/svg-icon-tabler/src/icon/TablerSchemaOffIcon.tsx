import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSchemaOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSchemaOffIcon = React.forwardRef<SVGSVGElement, TablerSchemaOffIconProps>(
	function TablerSchemaOffIcon(props, ref) {
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
				<path d="M6 2h4v4m-4 0h-1v-1" />
				<path d="M15 11v-1h5v4h-2" />
				<path d="M5 18h5v4h-5z" />
				<path d="M5 10h5v4h-5z" />
				<path d="M10 12h2" />
				<path d="M7.5 7.5v2.5" />
				<path d="M7.5 14v4" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSchemaOffIcon.displayName = "TablerSchemaOffIcon";
}
