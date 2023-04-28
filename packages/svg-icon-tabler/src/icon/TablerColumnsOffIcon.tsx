import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerColumnsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerColumnsOffIcon = React.forwardRef<SVGSVGElement, TablerColumnsOffIconProps>(
	function TablerColumnsOffIcon(props, ref) {
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
				<path d="M4 6h2" />
				<path d="M4 10h5.5" />
				<path d="M4 14h5.5" />
				<path d="M4 18h5.5" />
				<path d="M14.5 6h5.5" />
				<path d="M14.5 10h5.5" />
				<path d="M18 14h2" />
				<path d="M14.5 18h3.5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerColumnsOffIcon.displayName = "TablerColumnsOffIcon";
}
