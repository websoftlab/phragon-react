import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDjangoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDjangoIcon = React.forwardRef<SVGSVGElement, TablerBrandDjangoIconProps>(
	function TablerBrandDjangoIcon(props, ref) {
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
				<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" />
				<path d="M16 7v.01" />
				<path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDjangoIcon.displayName = "TablerBrandDjangoIcon";
}
