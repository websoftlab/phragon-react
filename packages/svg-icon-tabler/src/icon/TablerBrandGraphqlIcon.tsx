import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGraphqlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGraphqlIcon = React.forwardRef<SVGSVGElement, TablerBrandGraphqlIconProps>(
	function TablerBrandGraphqlIcon(props, ref) {
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
				<path d="M5.308 7.265l5.385 -3.029" />
				<path d="M13.308 4.235l5.384 3.03" />
				<path d="M20 9.5v5" />
				<path d="M18.693 16.736l-5.385 3.029" />
				<path d="M10.692 19.765l-5.384 -3.03" />
				<path d="M4 14.5v-5" />
				<path d="M12.772 4.786l6.121 10.202" />
				<path d="M18.5 16h-13" />
				<path d="M5.107 14.988l6.122 -10.201" />
				<path d="M12 3.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M12 20.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M4 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M4 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M20 16m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M20 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGraphqlIcon.displayName = "TablerBrandGraphqlIcon";
}
