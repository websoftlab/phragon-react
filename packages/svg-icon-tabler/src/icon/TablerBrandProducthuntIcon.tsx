import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandProducthuntIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandProducthuntIcon = React.forwardRef<SVGSVGElement, TablerBrandProducthuntIconProps>(
	function TablerBrandProducthuntIcon(props, ref) {
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
				<path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandProducthuntIcon.displayName = "TablerBrandProducthuntIcon";
}
