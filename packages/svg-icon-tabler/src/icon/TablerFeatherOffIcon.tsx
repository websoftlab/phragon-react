import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFeatherOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFeatherOffIcon = React.forwardRef<SVGSVGElement, TablerFeatherOffIconProps>(
	function TablerFeatherOffIcon(props, ref) {
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
				<path d="M4 20l8 -8" />
				<path d="M14 5v5h5" />
				<path d="M9 11v4h4" />
				<path d="M6 13v5h5" />
				<path d="M6 13l3.502 -3.502m2.023 -2.023l2.475 -2.475" />
				<path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1" />
				<path d="M11 18l3.499 -3.499m2.008 -2.008l2.493 -2.493" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFeatherOffIcon.displayName = "TablerFeatherOffIcon";
}
