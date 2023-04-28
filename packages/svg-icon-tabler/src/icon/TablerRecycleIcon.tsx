import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRecycleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRecycleIcon = React.forwardRef<SVGSVGElement, TablerRecycleIconProps>(function TablerRecycleIcon(
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
			<path d="M12 17l-2 2l2 2" />
			<path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
			<path d="M8.536 11l-.732 -2.732l-2.732 .732" />
			<path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
			<path d="M15.464 11l2.732 .732l.732 -2.732" />
			<path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRecycleIcon.displayName = "TablerRecycleIcon";
}
