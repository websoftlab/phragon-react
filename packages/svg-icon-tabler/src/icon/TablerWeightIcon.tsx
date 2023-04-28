import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWeightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWeightIcon = React.forwardRef<SVGSVGElement, TablerWeightIconProps>(function TablerWeightIcon(
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
			<path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWeightIcon.displayName = "TablerWeightIcon";
}
