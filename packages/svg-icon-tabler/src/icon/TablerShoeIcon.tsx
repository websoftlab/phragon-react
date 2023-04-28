import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShoeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShoeIcon = React.forwardRef<SVGSVGElement, TablerShoeIconProps>(function TablerShoeIcon(props, ref) {
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
			<path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
			<path d="M14 13l1 -2" />
			<path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
			<path d="M10 12l1.5 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShoeIcon.displayName = "TablerShoeIcon";
}
