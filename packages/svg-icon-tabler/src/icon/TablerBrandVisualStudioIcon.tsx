import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVisualStudioIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVisualStudioIcon = React.forwardRef<SVGSVGElement, TablerBrandVisualStudioIconProps>(
	function TablerBrandVisualStudioIcon(props, ref) {
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
				<path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandVisualStudioIcon.displayName = "TablerBrandVisualStudioIcon";
}
