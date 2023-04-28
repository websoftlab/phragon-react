import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHexagonsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHexagonsIcon = React.forwardRef<SVGSVGElement, TablerHexagonsIconProps>(function TablerHexagonsIcon(
	props,
	ref
) {
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
			<path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
			<path d="M8 11v-5l4 -2l4 2v5" />
			<path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHexagonsIcon.displayName = "TablerHexagonsIcon";
}
