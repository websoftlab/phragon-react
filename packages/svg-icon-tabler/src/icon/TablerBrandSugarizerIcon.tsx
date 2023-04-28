import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSugarizerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSugarizerIcon = React.forwardRef<SVGSVGElement, TablerBrandSugarizerIconProps>(
	function TablerBrandSugarizerIcon(props, ref) {
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
				<path d="M14.277 16l3.252 -3.252a1.61 1.61 0 0 0 -2.277 -2.276l-3.252 3.251l-3.252 -3.251a1.61 1.61 0 0 0 -2.276 2.276l3.251 3.252l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277l3.252 -3.252l3.252 3.252a1.61 1.61 0 1 0 2.277 -2.277l-3.252 -3.252z" />
				<path d="M12 5m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSugarizerIcon.displayName = "TablerBrandSugarizerIcon";
}
