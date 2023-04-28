import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNexoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNexoIcon = React.forwardRef<SVGSVGElement, TablerBrandNexoIconProps>(
	function TablerBrandNexoIcon(props, ref) {
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
				<path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3z" />
				<path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandNexoIcon.displayName = "TablerBrandNexoIcon";
}
